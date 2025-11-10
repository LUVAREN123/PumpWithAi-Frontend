import type { ConnectedStandardSolanaWallet } from "@privy-io/react-auth/solana"
import { Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js"

interface TransactionResponse {
    message: string,
    transactionId: string
}

const RECIPIENT_PUBLIC_KEY = import.meta.env.VITE_RECEIVER_PUBLIC_KEY

export default async function sendSOL(wallet: ConnectedStandardSolanaWallet ): Promise<TransactionResponse | string> {
    if (!wallet) return Promise.reject("Please connect the wallet first")

    try {
        const connection = new Connection('https://api.devnet.solana.com', 'processed')
        const sender = new PublicKey(wallet.address)
        const recipient = new PublicKey(RECIPIENT_PUBLIC_KEY)

        const { blockhash, lastValidBlockHeight} = await connection.getLatestBlockhash()

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: sender,
                toPubkey: recipient,
                lamports: LAMPORTS_PER_SOL * 0.2
            })
        )

        transaction.feePayer = sender
        transaction.recentBlockhash = blockhash
        transaction.lastValidBlockHeight = lastValidBlockHeight

        const signedTx = await wallet.signTransaction({
            transaction: new Uint8Array(
                transaction.serialize({
                    requireAllSignatures: true,
                    verifySignatures: false
                })
            )
        })

        const signature = await connection.sendRawTransaction(signedTx.signedTransaction, {
            skipPreflight: false,
            preflightCommitment: 'confirmed'
        })

        await connection.confirmTransaction({
            signature,
            blockhash,
            lastValidBlockHeight
        }, 'confirmed')

        return {
            transactionId: signature,
            message: "Transaction send!"
        }
    } catch (err) {
        console.error("Transaction failed:", err)
        return Promise.reject("Failed to perform transaction")
    }
}
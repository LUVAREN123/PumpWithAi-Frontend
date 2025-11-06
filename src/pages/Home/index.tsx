import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

import heroBg from '../../assets/images/hero-bg.png'
import adaptiveAiEngine from '../../assets/images/Adaptive AI Engine.png'
import transparentAndSecure from '../../assets/images/Transparent & Secure.png'
import dataDrivenDecisions from '../../assets/images/Data-Driven Decisions.png'
import communityFueledGrowth from '../../assets/images/Community-Fueled Growth.png'
import socialPulseTracking from '../../assets/images/Social Pulse Tracking.png'
import customFilters from '../../assets/images/Custom Filters.png'
import iphoneCutout1 from '../../assets/images/iphone cutout 1.png'
import iphoneCutout2 from '../../assets/images/iphone cutout 2.png'
import iphoneInHand from '../../assets/images/iphone hand.png'
import solanaCryptoNote from '../../assets/images/solana crypto note.png'
import tick from '../../assets/icons/tick.svg'
import engineBox from '../../assets/images/engine-box.svg'

import './styles.css'

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP)
  
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
    content: "#root"
  })
  
  ScrollTrigger.defaults({
    toggleActions: "restart none none none",
    once: true,
    immediateRender: false
  })
  
  const [faqOpen, setFaqOpen] = useState<number>(-1)

  const features = useMemo(() => [
    {
      title: "Adaptive AI Engine",
      description: "Our algorithms evolve with the market. Every scan refines the system, learning from pump patterns and wallet behavior in real time.",
      logo: adaptiveAiEngine
    },
    {
      title: "Transparent & Secure",
      description: "We don’t store your wallet or private data. You see what the AI sees — fully verifiable, completely secure.",
      logo: transparentAndSecure
    },
    {
      title: "Data-Driven Decisions",
      description: "No hype. No guessing. Every recommendation is backed by on-chain data, social metrics, and AI scoring precision.",
      logo: dataDrivenDecisions
    },
    {
      title: "Community-Fueled Growth",
      description: "Join a growing base of traders who share insights, refine models, and shape how the AI evolves.",
      logo: communityFueledGrowth
    },
    {
      title: "Social Pulse Tracking",
      description: "The AI listens to crypto Twitter, Telegram, and on-chain chatter — quantifying hype before it turns into movement.",
      logo: socialPulseTracking
    },
    {
      title: "Custom Filters",
      description: "Define your risk appetite. Choose filters for liquidity, volume, or age, and let the AI tailor results to your exact strategy.",
      logo: customFilters
    },
  ], [])

  const faqs = useMemo(() => [
  {
    "ques": "What exactly does PumpWithAI do?",
    "ans": "PumpWithAI is an AI-powered platform that analyzes thousands of memecoins and highlights promising ones based on on-chain data, market trends, and social sentiment."
  },
  {
    "ques": "How does the AI find “the next big coin”?",
    "ans": "It uses a scoring system that evaluates each token’s fundamentals, activity, hype, and safety from multiple trusted data sources to identify strong momentum and growth potential."
  },
  {
    "ques": "Is PumpWithAI safe to use?",
    "ans": "Yes. PumpWithAI doesn’t require wallet access or perform trades—it’s a paid research service that provides AI-driven insights and rankings using verified data."
  },
  {
    "ques": "Do I need trading experience to use it?",
    "ans": "Not at all. The platform simplifies complex crypto data into clear AI-driven scores and insights so anyone can understand potential opportunities easily."
  }
  ], [])

  const toggleFaq = (idx: number): void => {
    if (faqOpen == idx) setFaqOpen(-1)
    else setFaqOpen(idx)
  }

  useGSAP(() => {
    let heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center"
      }
    })

    let splitTitle = SplitText.create(".hero-section .hero-title", { type: "words", aria: "hidden" })
    heroTl.from(
      splitTitle.words,
      {
        opacity: 0,
        duration: 1.5,
        ease: "sine.out",
        stagger: 0.1
      }
    )

    let splitSubtitle = SplitText.create(".hero-section .hero-subtitle", { type: "words", aria: "hidden" })
    heroTl.from(
      splitSubtitle.words,
      {
        opacity: 0,
        duration: 0.4,
        ease: "sine.out",
        stagger: 0.1
      },
      "-=1.5"
    )

    gsap.fromTo(
      ".hero-section .engine-box",
      { opacity: 0, scale: 0.2 },
      {
        scrollTrigger: {
          start: "top center",
          trigger: ".hero-section"
        },
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out"
      }
    )

    const bentos = gsap.utils.toArray(".bento-box")
    gsap.fromTo(
      bentos,
      { scale: 0, opacity: 1 },
      {
        scrollTrigger: {
          trigger: ".section-1",
        },
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.15,
      }
    )

    gsap.fromTo(
      ".section-2 .section-img-large",
      {
        xPercent: 20,
        scale: 0.95
      },
      {
        xPercent: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".section-2",
          start: 'top center',
          end: 'center 50%',
          scrub: 1,
        }
      }
    )

    const box1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-4",
        start: "5% center"
      }
    })

    box1Tl.fromTo(
      ".section-4 .column-img",
      { opacity: 0, scale: 0.2 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    
    box1Tl.fromTo(
      ".section-4 .column-img img",
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    
    const box2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-5",
        start: "5% center"
      }
    })

    box2Tl.fromTo(
      ".section-5 .column-img",
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    )
    
    box2Tl.fromTo(
      ".section-5 .column-img img",
      { y: 120, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    
    const features = gsap.utils.toArray(".feature-box")
    gsap.fromTo(
      features,
      { scale: 0, opacity: 1 },
      {
        scrollTrigger: {
          start: "top center",
          end: "70% center",
          trigger: ".section-6",
          scrub: true
        },
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.25,
      }
    )
  }, [])

  return (
    <motion.div
        id='home'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <div className="home-container">
          <section className="hero-section" role='region' aria-label='Hero Section'>
            <img src={heroBg} alt="Hero Background" className='hero-bg' />
            <h1 className="hero-title">
              The smarter way to trade
              <br />
              memecoins with AI
            </h1>
            <p className="hero-subtitle">
              We scan solana’s memecoin market in real time to spot the next
              <br />
              100x before the crowd does.
            </p>
            <button className='engine-box' no-select="true">
              <img src={engineBox} aria-hidden />
            </button>
          </section>
          <section className="section-1" role='region' aria-label='Explore Section'>
            <h2 className="section-heading">Explore Solana in a whole new way</h2>
            <div className="bento-container">
              <div className="bento-box" style={{ gridArea: "a" }}></div>
              <div className="bento-box" style={{ gridArea: "b" }}></div>
              <div className="bento-box" style={{ gridArea: "c" }}></div>
              <div className="bento-box" style={{ gridArea: "d" }}></div>
              <div className="bento-box" style={{ gridArea: "e" }}></div>
            </div>
          </section>
          <section className="section-2" role='region'>
            <div className="section-content">
              <h2 className="section-heading">
                The Future of Trading.
                <br />
                Redefined by AI.
              </h2>
              <p className="section-description">
                Our AI reads the Solana market in real time, faster than any human ever could. It finds the next big coins before they trend and puts you one step ahead of everyone else. With every scan, it learns, adapts, and predicts the market’s next move.
              </p>
            </div>
            <div className="section-img-large">
              <img src={iphoneInHand} alt="iPhone in hand" />
            </div>
          </section>
          <section className="section-3" role='region'>
            <div className="section-content">
              <h2 className="section-heading">
                Detect, Analyze, Profit.
                <br />
                All in one place.
              </h2>
              <p className="section-description">
                Our AI finds every next big coin before the market catches on.
                <br />
                We break down real-time data into clear insights, so you never have to guess. Trade smarter, move faster, and profit ahead of the crowd.
              </p>
              <ul className="highlights-checklist">
                <li className="highlight-point">
                  <img src={tick} alt="tick" />
                  <span>
                    AI-Powered Scoring System
                  </span>
                </li>
                <li className="highlight-point">
                  <img src={tick} alt="tick" />
                  <span>
                    Fully Customizable Filters
                  </span>
                </li>
                <li className="highlight-point">
                  <img src={tick} alt="tick" />
                  <span>
                    DEX Paid Check Included
                  </span>
                </li>
              </ul>
              <button
                className="section-btn"
                aria-label='Try our AI Engine'
              >
                Try out AI Engine
              </button>
            </div>
            <div className="section-img-large">
              <img src={solanaCryptoNote} alt="solana crypto note" />
            </div>
          </section>
          <section className="section-4 columned" role='region'>
            <div className="column">
              <div className="column-img">
                <img src={iphoneCutout1} alt="iPhone Cutout" />
              </div>
            </div>
            <div className="column">
              <div className="section-label">Seamless</div>
              <h2 className="section-heading">Turn Pump.fun chaos into clear opportunity</h2>
              <p className="section-description">
                Discover every new Pump.fun launch with real-time data that actually helps you decide.
                <br />
                No noise, no guessing, just clean insights on volume, liquidity, holders, momentum, and many more advance data enrichments.
              </p>
            </div>
          </section>
          <section className="section-5 columned" role='region'>
            <div className="column">
              <div className="section-label">Performance Ready</div>
              <h2 className="section-heading">AI turns DexScreener data into real insight.</h2>
              <p className="section-description">
                Our AI analyzes DexScreener’s live market data, filtering thousands of tokens to highlight those gaining genuine traction.
                <br />
                It looks for real trading activity and steady growth patterns rather than short-term pumps.
              </p>
            </div>
            <div className="column">
              <div className="column-img">
                <img src={iphoneCutout2} alt="iPhone Cutout" />
              </div>
            </div>
          </section>
          <section className="section-6" role='region' aria-label='Features Section'>
            <h2 className="section-heading">Built Different</h2>
            <div className="features-container">
              {features.map((feature, idx) => (
                <div className="feature-box" key={idx}>
                  <div className="feature-logo"><img src={feature.logo} alt={feature.title} /></div>
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="faq-section columned" role='region' aria-label='FAQ Section'>
            <div className="column">
              <h2 className="section-heading">Frequently Asked Questions</h2>
            </div>
            <div className="column">
              <div className="faq-container">
                {faqs.map((faq, idx) => (
                  <div className="faq-item" key={idx} data-open={idx == faqOpen} aria-expanded={idx == faqOpen}>
                    <button
                      className="faq-header"
                      onClick={(e) => {
                        e.currentTarget.blur()
                        toggleFaq(idx)
                        const faqAns = e.currentTarget.parentElement?.querySelector(".faq-ans");
                        if (!faqAns) return
                        
                        faqAns.setAttribute("style", `--computedHeight: ${faqAns.scrollHeight}px`)
                      }}
                    >
                      <span className="material-symbols-rounded">{idx == faqOpen ? 'remove' : 'add'}</span>
                      <h3 className="faq-ques">
                        {faq.ques}
                      </h3>
                    </button>
                    <p className="faq-ans">{faq.ans}</p>
                  </div>
                ))}
              </div>
              <Link
                to='/guides'
                aria-label='See more frequently asked questions'
                className='faq-see-more'
              >
                Check out the guides
                <span className="material-symbols-rounded">arrow_right_alt</span>
              </Link>
            </div>
          </section>
        </div>
    </motion.div>
  )
}

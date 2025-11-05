
import discord from '../../../assets/icons/discord.svg'
import telegram from '../../../assets/icons/telegram.svg'
import twitter from '../../../assets/icons/twitter.svg'
import instagram from '../../../assets/icons/instagram.svg'

import './styles.css'

export default function Footer() {
  const socials = [
    {
      url: "https://telegram.me",
      icon: telegram,
      alt: "telegram"
    },
    {
      url: "https:///x.com",
      icon: twitter,
      alt: "twitter"
    },
    {
      url: "https://instagram.com",
      icon: instagram,
      alt: "instagram"
    },
    {
      url: "https://discord.com",
      icon: discord,
      alt: "discord"
    }
  ]

  return (
    <footer id='footer' no-select="true">
      <div className="copyright">© {new Date().getFullYear()} PumpWithAI All rights reserved</div>
      <div className="socials">
        {socials.map((social, index) => (
          <a
            key={index}
            className='social'
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={social.icon} alt={social.alt} />
          </a>
        ))}
      </div>
    </footer>
  )
}

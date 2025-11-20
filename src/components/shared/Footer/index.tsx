
import asset from '../../../lib/img'

import './styles.css'

export default function Footer() {
  const socials = [
    {
      url: "https://telegram.me",
      icon: asset("/src/assets/icons/telegram.svg"),
      alt: "telegram"
    },
    {
      url: "https:///x.com",
      icon: asset("/src/assets/icons/twitter.svg"),
      alt: "twitter"
    },
    {
      url: "https://instagram.com",
      icon: asset("/src/assets/icons/instagram.svg"),
      alt: "instagram"
    },
    {
      url: "https://discord.com",
      icon: asset("/src/assets/icons/discord.svg"),
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

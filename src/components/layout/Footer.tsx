import React from 'react'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/raj.n.143/",
      icon: "📘"
    },
    {
      name: "Instagram", 
      url: "https://www.instagram.com/dsa_visualization/",
      icon: "📷"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rajesh-rathore-0501/",
      icon: "💼"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/Rajesh946055",
      icon: "🐦"
    },
    {
      name: "GitHub",
      url: "https://github.com/raj-rathod",
      icon: "🐙"
    }
  ]

  const webLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "https://raj-rathod.github.io/rajesh-rathore/" },
    { name: "Contact", url: "https://www.instagram.com/raj_rathod1313/" },
    { name: "Blogs", url: "https://dev.to/rajrathod" }
  ]

  return (
    <footer className="bg-primary bg-opacity-75 mt-5">
      <div className="container py-5">
        <div className="text-center">
          <h3 className="mb-4">
            <a 
              href="https://raj-rathod.github.io/DSA-visualisation-in-angular/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              DSA Visualization
            </a>
          </h3>
          
          <div className="d-flex justify-content-center flex-wrap mb-4">
            {webLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : '_self'}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="text-uppercase mx-3 text-decoration-none text-dark"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="fw-bold">Stay In Touch</p>
          
          <div className="d-flex justify-content-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-decoration-none"
                title={social.name}
              >
                <span style={{ fontSize: '1.5rem' }}>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
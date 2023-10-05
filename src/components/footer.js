import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footer">
        <div className="footer">
        <h2>Footer Design</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          alias vel ullam cum, tenetur pariatur eos exercitationem? Alias sit,
          ullam iusto est labore voluptates amet adipisci incidunt? Ullam, saepe
          laboriosam?
        </p>
        <hr style={{backgroundColor: "#1c2123", borderColor: "#1c2123"}} />
        <div id="icons">
          <img
            src="/assets/twitter-svgrepo-com.svg"
            alt="twitter"
            height="30"
          />
          <img
            src="/assets/facebook-svgrepo-com.svg"
            alt="facebook"
            height="30"
          />
          <img
            src="/assets/instagram-svgrepo-com.svg"
            alt="instagram"
            height="30"
          />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
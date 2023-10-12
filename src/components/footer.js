import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-200 px-12 py-5 sm:p-5 ">
      <div className="flex items-center justify-center mx-auto text-gray-900">
        <div className="max-w-screen-md mx-auto text-center">
        <h2 className="mb-3 text-2xl">Footer Design</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          alias vel ullam cum, tenetur pariatur eos exercitationem? Alias sit,
          ullam iusto est labore voluptates amet adipisci incidunt? Ullam, saepe
          laboriosam?
        </p>
        <hr style={{backgroundColor: "#1c2123", borderColor: "#1c2123", margin: "20px 0"}} />
        <div className="flex gap-5 justify-center mt-8">
          <img
            src="/assets/twitter-svgrepo-com.svg"
            alt="twitter"
            className="h-8"
          />
          <img
            src="/assets/facebook-svgrepo-com.svg"
            alt="facebook"
            className="h-8"
          />
          <img
            src="/assets/instagram-svgrepo-com.svg"
            alt="instagram"
            className="h-8"
          />
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
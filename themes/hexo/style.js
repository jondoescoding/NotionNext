/* eslint-disable react/no-unknown-property */
/**
 * The CSS styles here only take effect for the current theme
 * Theme customization CSS
 * @returns
 */
const Style = () => {
  return (<style jsx global>{`
    // Base color
    body{
        background-color: #f5f5f5
    }
    .dark body{
        background-color: black;
    }
  
    /* Menu underline animation */
    #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(#928CEE, #928CEE);
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: 0 2px;
        transition: background-size 100ms ease-in-out;
    }
    
    #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: #FFFFFF; 
    }

    /* Set a top-to-bottom gradient black */
    #theme-hexo .header-cover {
        content: "";
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: rgb(128,128,128);
    }

    /* Custom */
    .tk-footer{
        opacity: 0;
    }

    // Selected text color
    ::selection {
        background: rgba(0, 0, 0, 0.1);
    }

    // Custom scrollbar
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #49b1f5;
    }

    * {
        scrollbar-width:thin;
        scrollbar-color: #49b1f5 transparent
    }
    

  `}</style>)
}

export { Style }

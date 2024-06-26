# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




 <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-5 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex items-center space-x-2 rounded-lg overflow-hidden mb-4'>
        <input 
          type='text'
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          Copy
        </button>
      </div>
    </div>
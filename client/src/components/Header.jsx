export default function Header() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap"
        rel="stylesheet"
      />
      <div className='flex justify-center items-center h-20 bg-gradient-to-r from-indigo-500 to-slate-400 w-auto'>
        <div className="text-3xl font-bold underline">
          Tick-It
        </div>
      </div>
      
    </div>
  )
}

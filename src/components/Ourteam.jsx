const people = [
    {
      name: 'Ajay Shrestha',
      role: 'Managing Director',
      imageUrl:'public/images/team/ajay.jpg',
      url:'https://www.facebook.com/ajaya.shrestha.986'
    },
    {
        name: 'Purranjan Sapkota',
        role: 'Senior Environment Researcher',
       
        imageUrl:'public/images/team/purranjan.jpeg',
        url:'https://www.facebook.com/sapkotap'
                },
      {
        name: 'Annan Shrestha',
        role: 'GIS & RS Analys',
        imageUrl:'public/images/team/annan.jpg',
        url:'https://www.facebook.com/dial.annan'
                },
      {
        name: 'Bijaya Rai',
        role: 'Senior Environment Researcher',
        imageUrl: 'public/images/team/bijaya.jpg',
        url:'https://www.facebook.com/hated.person.146'
          
      },
      {
        name: 'Avash Poudel',
        role: 'DRRM-CAA Expert',
        imageUrl:'public/images/team/avash.jpg',
        url:'https://www.facebook.com/avash.env'
              },
      {
        name: 'Tara Ale',
        role: 'Environment Researcher ',
        imageUrl:'public/images/team/tara.jpg',
        url:'https://www.facebook.com/tara.ale.5'
        },
      
      
    // More people...
  ]



export default function Ourteam() {
   return (
 
        <div >
            <section className="bg-white dark:bg-gray-900 py-9">


            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500 dark:text-white">Our Team</h2>
                    {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Meet Out Team</p> */}
                </div> 



                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {people.map((person) => (
                        
                    <div key={person.name} class="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-4 w-36 h-36 rounded-full"   src={person.imageUrl} alt="Bonnie Avatar" />
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <a href="#">{person.name}</a>
                        </h3>
                        <p>{person.role}</p>
                        <ul className="flex justify-center mt-4 space-x-4">
                            <li>
                                <a href={person.rl} className="text-[#39569c] hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                                </a>
                            </li>
                            
                             
                        </ul>
                    </div>
                    ))}



                    


                    
                    
                    
                    
                
            
                </div>
            </div>
            </section> 

        </div>
   
    
      
 
  )
}

 

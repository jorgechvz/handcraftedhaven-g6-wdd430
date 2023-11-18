import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section>
        <h1>Handcrafted Haven Group 6</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus aspernatur molestiae esse repellat eos libero nobis id voluptates nulla! Autem, unde eligendi! Tenetur labore laborum, error non vero provident officiis.</p>
        <button>lorem</button>
      </section>
      <section>
        <div>
          <h2>Lorem impsun</h2>
          <button></button>
        </div>
        <div>
          <div>
            <Image src="/images/1.jpg" width={200} height={200} alt=''/>
            <h4></h4>
            <p></p>
            <button>buy now</button>
          </div>
          <div>
            <Image src="/images/1.jpg" width={200} height={200} alt=''/>
            <h4></h4>
            <p></p>
            <button>buy now</button>
          </div>
          <div>
            <Image src="/images/1.jpg" width={200} height={200} alt=''/>
            <h4></h4>
            <p></p>
            <button>buy now</button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2></h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <button></button>
        </div>
        <img src="" alt="" />
      </section>
    </main>
  )
}

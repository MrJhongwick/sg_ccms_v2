import HeaderBox from '@/components/HeaderBox'

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
        <HeaderBox 
            type="greeting"
            title="Welcome"
            user={'Guest'}
            subtext="Access and manage your counseling efficiently."
          />
        </header>
      </div>
    </section>  
  )
}

export default Home
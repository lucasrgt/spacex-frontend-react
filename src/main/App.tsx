import ResultsContainer from '../lib/modules/launch/results/results.tsx'
import RocketLaunchesContainer from '../lib/modules/launch/charts/rocket-launches/rocket-launches.tsx'
import SectionSeparator from '../lib/components/atoms/section-separator.tsx'
import Header from '../lib/components/molecules/header.tsx'
import RegistersContainer from '../lib/modules/launch/registers/registers.tsx'
import YearLaunches from '../lib/modules/launch/charts/year-launches/year-launches.tsx'
import YearLaunchesContainer from '../lib/modules/launch/charts/year-launches/year-launches.tsx'

function App() {
  return (
    <>
      <main className="bg-gradient-to-tl text-white from-spacegray-500 to-spacegray-600 min-h-screen h-full tracking-widest">
        <Header />
        <ResultsContainer />
        <SectionSeparator />
        <div className="flex flex-col md:flex-row">
          <RocketLaunchesContainer />
          <YearLaunchesContainer />
        </div>
        <RegistersContainer />
      </main>
    </>
  )
}

export default App

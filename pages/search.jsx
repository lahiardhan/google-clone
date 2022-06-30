import Head from "next/head"
import Header from "../components/organisms/Header"

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
    </div>
  )
}

export default Search
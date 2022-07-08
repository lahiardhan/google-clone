import axios from "axios";
import Head from "next/head"
import { useRouter } from "next/router";
import Header from "../components/organisms/Header"
import SearchResults from "../components/organisms/SearchResults";

function Search({data}) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>

      {/* Header */}
      <Header />

      {/* Search Results */}
      <SearchResults data={data}/>
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
	const API_url = "https://google-search3.p.rapidapi.com/api/v1";

	const response = await fetch(`${API_url}/search/q=${context.query.term}&num=30`, {
		method: "GET",
		headers: {
			"X-User-Agent": "desktop",
			"X-Proxy-Location": "SG",
			"X-RapidAPI-Key": "60372be3f7msh238aa1217ff519bp19cf06jsncfdcb930081a",
			"X-RapidAPI-Host": "google-search3.p.rapidapi.com",
		},
	});

	const data = await response.json();
	return {
		props: { data }
	}
}
import { Fragment } from "react"
import Link from 'next/link'

const NewsPage = () => {
    return <Fragment>
      <h1>Top News</h1>
      <ul>
        <li>
          <Link href="/news/news-one">News One</Link>
        </li>
      </ul>
    </Fragment>
  }
  
export default NewsPage

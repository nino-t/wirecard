import Header from './Header'
import Footer from './Footer'

export const MainLayout = (props) => (
	<div>
		<Header />
		{props.children}
		<Footer />
	</div>
)
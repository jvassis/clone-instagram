import { Story } from '../Story'
import { Post } from '../Post'
import './style.css'
import { Suggestion } from '../Suggestion'

export function Layout() {
    return(
        <>
            <div className='main-grid'>
                <div className='first-column' style={{ gridArea: 'first-column' }}>
                    <div className='box'>
                        <Story />
                    </div>
                    <div className='box' style={{margin: '30px 0'}}>
                        <Post />
                    </div>
                </div>
                <div style={{ gridArea: 'second-column' }}>
                    <div className='suggestion-box' >
                        <Suggestion />
                    </div>
                </div>
            </div>
        </>
    )
}
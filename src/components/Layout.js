import React from 'react';
import ReactDOM from 'react-dom';

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.content}
//             <p>footer</p>
//         </div>
//     )
// }

// const template = (
//     <p>this is template</p>
// );
    
//ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));


const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

ReactDOM.render((
    <Layout>
        <p>this is template</p>
    </Layout>
), document.getElementById('app'));
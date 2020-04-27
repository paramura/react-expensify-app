import React from 'react';
import ReactDOM from 'react-dom';

const Info = ((props) => {
return (<div>
        <h1> Title </h1>
        <p>this is test para : {props.info}</p>
    </div>)
});


const RequireAuthentication = (WrappedComponent) => {
    return(
        (props) => {return(<div>
                    {props.isAuthenticated ? ( 
                        <WrappedComponent {...props}/>
                        ) : (<p>Not authenticated</p>
                            )}
                       
            </div>)}
    )
}
;

// const test = {
//     component: ( (props) => {return(<div>
//         {props.isAuthenticated ? ( 
//             <p>Authenticated</p>
//             ) : (<p>Not authenticated</p>
//                 )}
           
// </div>)})
// };

// const Test_Print = test.component;

const AuthenticateInfo = RequireAuthentication(Info);

// ReactDOM.render(<Test_Print isAuthenticated={true}/>, document.getElementById('app'));
ReactDOM.render(<AuthenticateInfo isAuthenticated={true} info="This is from Info props"/>, document.getElementById('app'));
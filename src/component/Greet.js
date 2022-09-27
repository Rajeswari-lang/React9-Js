import React from "react"
// function Greet(){
//     return<h1>Hello raji</h1>
// }
const Greet = props => {
    const {name, heroName} = props
return(
    <div>
<h1>hello {props.name} a.k.a{props.heroName}</h1>
{props.children}
</div>
)
}

export default Greet
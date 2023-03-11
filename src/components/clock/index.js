import{h,render,components} from 'preact';

class Clock extends components{
    render(){
        let time = new Date().toLocaleDateString();
        return <span> { time } </span>;
    }
}

render (<Clock/>, document.body) ;
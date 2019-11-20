export function scrollleft() {
    const width = document.querySelector('.slide').clientWidth;
    const current = this.state.current;
    console.log('first time --- ' + current)
    console.log('clicked '+ width);
    switch (this.state.current) {
        case -1:
            this.setState({
                value: -width,
                current: 0
            });
            console.log(this.state.current + '           here');
            break;
        case 0:
            this.setState({
                value: -width * 2,
                current: 1
            });
            console.log(this.state.current + '           here');
            break;
        case 1:
            this.setState({
                value: 0,
                current: -1
            });
            console.log(this.state.current + '           here');
            break;   
    }
}

let slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
}

export const keepScrolling = () => {

}

export function scrollright() {
    const width = document.querySelector('.slide').clientWidth;
    const current = this.state.current;
    console.log('first time --- ' + current)
    console.log('clicked '+ width);
    switch (current) {
        case -1:
            this.setState({
                value: 0,
                current: 0
            });
            console.log(this.state.current + '           here');
            break;
        case 0:
            this.setState({
                value: -width,
                current: 1
            });
            console.log(this.state.current + '           here');
            break;
        case 1:
            this.setState({
                value: -width * 2,
                current: -1
            });
            console.log(this.state.current + '           here');
            break;         
    }
    console.log(this.state.current);
    // console.log('clicked');
    // if (this.state.value < 0) {
    //     this.setState({
    //         value: this.state.value + 1000
    //     });
    // }

}

export default { scrollleft, keepScrolling, scrollright };
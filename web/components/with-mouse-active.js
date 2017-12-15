import { Component } from 'react'

export default Child =>
  class withMouseActive extends Component {
    static getInitialProps(ctx) {
      return Child.getInitialProps(ctx)
    }

    state = {
      isMouseActive: true,
      timeoutId: null,
    }

    componentDidMount() {
      this.setMouseActive()
      document.body.addEventListener('ontouchstart', this.setMouseActive)
      document.body.addEventListener('mousemove', this.setMouseActive)
      document.body.addEventListener('click', this.setMouseActive)
    }

    componentWillUnmount() {
      clearTimeout(this.state.timeoutId)
      document.body.addEventListener('ontouchstart', this.setMouseActive)
      document.body.removeEventListener('mousemove', this.setMouseActive)
      document.body.removeEventListener('click', this.setMouseActive)
    }

    render() {
      return <Child {...this.props} isMouseActive={this.state.isMouseActive} />
    }

    setMouseActive = () => {
      clearTimeout(this.state.timeoutId)
      const timeoutId = setTimeout(() => {
        this.setState({ isMouseActive: false })
      }, 2000)

      this.setState(() => ({
        isMouseActive: true,
        timeoutId,
      }))
    }
  }

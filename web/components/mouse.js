import { PureComponent } from 'react'

export default class withMouseActive extends PureComponent {
  state = {
    isMouseActive: true,
    timeoutId: null,
  }

  componentDidMount() {
    this.setMouseActive()
    document.body.addEventListener('touchstart', this.setMouseActive)
    document.body.addEventListener('mousemove', this.setMouseActive)
    document.body.addEventListener('click', this.setMouseActive)
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId)
    document.body.removeEventListener('touchstart', this.setMouseActive)
    document.body.removeEventListener('mousemove', this.setMouseActive)
    document.body.removeEventListener('click', this.setMouseActive)
  }

  render() {
    return this.props.children(this.state.isMouseActive)
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

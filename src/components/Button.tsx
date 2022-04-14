type Props = {
  classToggle: VoidFunction
}

const Button: React.VFC<Props> = ({ classToggle }) => {
  return (
    <div className="flex w-[80px] flex-wrap">
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
      <button type="button" className="nav-button2" onClick={classToggle}></button>
    </div>
  )
}
export default Button

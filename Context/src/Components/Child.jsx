import GrandChild from './GrandChild'

const Child = () => {
  return (
    <div className="card p-3 mb-3 border-secondary">
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  )
}

export default Child

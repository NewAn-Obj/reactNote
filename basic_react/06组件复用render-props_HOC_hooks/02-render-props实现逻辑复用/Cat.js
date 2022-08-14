import img from './1.gif'

export default function Cat({ x, y }) {
  return (
    <div>
      <img
        src={img}
        style={{
          left: x,
          top: y,
          position: 'absolute',
        }}
        alt=""
      />
    </div>
  )
}

import { CommenstData } from '@/input'

import s from '../style/comment-list.module.scss'
type CommentsListProps = {
  items: CommenstData[]
}
export const CommentList = ({ items }: CommentsListProps) => {
  return (
    <ul className={s.comments}>
      {items.map(item => (
        <li key={item._id.toString()}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  )
}

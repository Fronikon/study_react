import styles from './Paginator.module.scss';
import { useState } from 'react';

export function Paginator(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionNumber = portionNumber * props.portionSize;

  return (
    <div>
      {portionNumber > 1 && <button onClick={ () => { setPortionNumber(portionNumber - 1) } }>Prew</button>}
      {pages
        .filter((page) => {
          return page >= leftPortionNumber && page <= rightPortionNumber;
        })
        .map((page) => {
            return <span onClick={() => props.onPageChanged(page)}
                        className={styles.page + (props.currentPage === page ? ' ' + styles.selectPage : '')}
            >{page}</span>
        })}
      {portionCount > portionNumber && <button onClick={ () => { setPortionNumber(portionNumber + 1) } }>Next</button>}
    </div>
  )
}
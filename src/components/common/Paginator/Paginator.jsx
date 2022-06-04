import styles from './Paginator.module.scss';

export function Paginator({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount && i <= 40; i++) {
      pages.push(i);
  }

  return (
    <div>
      {pages.map((page) => {
            return <span onClick={() => onPageChanged(page)}
                        className={styles.page + (currentPage === page ? ' ' + styles.selectPage : '')}
            >{page}</span>
        })}
    </div>
  )
}
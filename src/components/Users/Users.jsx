import User from './User/User';
import styles from './Users.module.scss'

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount && i <= 40; i++) {
        pages.push(i);
    }

    return (<div className={styles.users}>
        {pages.map((page) => {
            return <span onClick={() => props.onPageChanged(page)} className={styles.page + (props.currentPage === page ? ' ' + styles.selectPage : '')}>{page}</span>
        })}
        {
            props.users.map((cur) => {
                return <User key={cur.id}
                    name={cur.name}
                    avatar={cur.photos.small}
                    location={'cur.location'}
                    status={cur.status}
                    id={cur.id}
                    followed={cur.followed}
                    follow={props.follow}
                    unFollow={props.unFollow} />
            })
        }
    </div>)
}

export default Users;
import React, { useEffect, useState } from 'react';
import styles from './ProfileStatus.module.scss'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={styles.status}>
            <h3 className='title'>Status</h3>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} className={styles.status_text}>{props.status || '......'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                        autoFocus={true}
                        className={styles.field_input}
                        onBlur={diactivateEditMode}
                        value={status}
                        type="text" />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export const Dashboard = () => {
  const [doReuse, setDoReuse] = React.useState<boolean>(true)

  return (
    <div className='p-5'>
      <div className='row mh-350px mh-lg-500px'>
        <div className='mb-5'>
          <label className='form-label fw-bold'>Name:</label>
          <div>
            <input
              type='text'
              className='form-control form-control-lg form-control-solid'
              name='appname'
              placeholder=''
              defaultValue={'Alice'}
              style={{ fontSize: '1em' }}
            />
          </div>
        </div>

        <div className='mb-5'>
          <label className='form-label fw-bold'>Avatar:</label>
          <input className='form-control' type='file'></input>

        </div>

        <div className='mb-5'>
          <label className='form-label fw-bold'>Skills:</label>

          <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
            <input
              className='form-check-input'
              type='checkbox'
              name='notifications'
              checked={doReuse}
              onChange={() => setDoReuse(!doReuse)}
            />
            <label className='form-check-label'>Enabled</label>
          </div>
        </div>
        <div style={{ ...(!doReuse && { display: 'none' }) }}>
          <div className='mb-5'>
            <div className='card' style={{ padding: '20px' }}>
              <div className='d-flex flex-row justify-content-between'>
                <div style={{ flexGrow: 1 }}>
                  <label className='form-label fw-bold'>Skill name:</label>

                  <select
                    className='form-select form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option value='1'>Onigiri</option>
                    <option value='2'>Ushibari</option>
                    <option value='3'>Shishi sonson</option>
                    <option value='4'>Tatsumaki</option>
                  </select>
                </div>
                <div style={{ width: '60px', flexGrow: 0 }}></div>
                <div style={{ flexGrow: 1 }}>
                  <label className='form-label fw-bold'>Skill version:</label>

                  <select
                    className='form-select form-select-solid'
                    data-kt-select2='true'
                    data-placeholder='Select option'
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>
                </div>
              </div>
              <div style={{ margin: '10px 0', height: '1.5px', backgroundColor: '#e9e7e7' }}></div>
              <div className='d-flex justify-content-center align-items-center'>
                <div style={{ fontSize: '1.5em' }}>
                  <FontAwesomeIcon className='action-icon' icon={faCirclePlus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

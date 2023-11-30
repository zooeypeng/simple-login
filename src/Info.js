import { useState } from 'react';
import { useAuth } from './AuthContext';
import './Info.css';

const Info = () => {
  const { username, password } = useAuth();
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTab, setSelectedTab] = useState('version');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectedTab('version');
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="information-container">
      <div className="tab-select-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">-- Select --</option>
          <option value="expand-info">Details</option>
        </select>
      </div>

      {selectedOption === 'expand-info' && (
        <div>
          <ul className="tab-list">
            <li className="tab-list-item">
              <button
                className={`tab-button ${selectedTab === 'version' ? 'active' : ''}`}
                onClick={() => handleTabChange('version')}
              >
                VERSION
              </button>
            </li>
            <li className="tab-list-item">
              <button
                className={`tab-button ${selectedTab === 'account' ? 'active' : ''}`}
                onClick={() => handleTabChange('account')}
              >
                ACCOUNT
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {selectedTab === 'version' && (
              <div>v.1.1.1.1</div>
            )}
            {selectedTab === 'account' && (
              <div>
                <div>Account: {username}</div>
                <div>Password: {password}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Info
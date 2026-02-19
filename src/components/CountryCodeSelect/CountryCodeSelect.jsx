import { useState, useRef, useEffect, useMemo } from 'react';
// import { getCountries, getCountryCallingCode, getCountryName } from 'react-phone-number-input';
// import { default as PhoneInputCountryIcon } from 'react-phone-number-input/flags';
import { countryCodes } from '../../data/countryCodes';
import './CountryCodeSelect.css';

const CountryCodeSelect = ({ value, onChange, id, required }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);
    const listRef = useRef(null);

    // TODO: When react-phone-number-input is installed, uncomment the library code above
    // and remove this hardcoded fallback
    const selectedCountry = countryCodes.find(item => item.code === value) || countryCodes[0];

    const filteredCountries = countryCodes.filter(item =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.includes(searchTerm)
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
                setFocusedIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSelect = (country) => {
        onChange({ target: { name: 'countryCode', value: country.code } });
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
    };

    const handleKeyDown = (e) => {
        if (!isOpen) {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                e.preventDefault();
                setIsOpen(true);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedIndex(prev => 
                    prev < filteredCountries.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < filteredCountries.length) {
                    handleSelect(filteredCountries[focusedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                setSearchTerm('');
                setFocusedIndex(-1);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        if (focusedIndex >= 0 && listRef.current) {
            const focusedElement = listRef.current.children[focusedIndex];
            if (focusedElement) {
                focusedElement.scrollIntoView({ block: 'nearest' });
            }
        }
    }, [focusedIndex]);

    // Generate flag emoji from ISO country code (fallback until library is installed)
    const getFlagEmoji = (isoCode) => {
        if (!isoCode) return '🌍';
        // Convert ISO code (e.g., "US") to flag emoji
        const codePoints = isoCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    };
    
    // TODO: When react-phone-number-input is installed, use FlagIcon component instead
    // const FlagIcon = ({ country }) => {
    //     if (!country) return <span>🌍</span>;
    //     const Flag = PhoneInputCountryIcon[country];
    //     return Flag ? <Flag title={country} /> : <span>🌍</span>;
    // };

    return (
        <div className="country-code-select-wrapper" ref={dropdownRef}>
            <button
                type="button"
                className="country-code-select-button"
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <span className="country-code-flag">{getFlagEmoji(selectedCountry.iso || 'US')}</span>
                <span className="country-code-text">{selectedCountry.code}</span>
                <span className="country-code-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>
            {isOpen && (
                <div className="country-code-dropdown">
                    <input
                        ref={inputRef}
                        type="text"
                        className="country-code-search"
                        placeholder="Search country..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setFocusedIndex(-1);
                        }}
                        onKeyDown={handleKeyDown}
                    />
                    <ul className="country-code-list" ref={listRef} role="listbox">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((item, index) => (
                                <li
                                    key={item.code}
                                    className={`country-code-option ${index === focusedIndex ? 'focused' : ''} ${value === item.code ? 'selected' : ''}`}
                                    onClick={() => handleSelect(item)}
                                    onMouseEnter={() => setFocusedIndex(index)}
                                    role="option"
                                    aria-selected={value === item.code}
                                >
                                    <span className="country-code-flag">{getFlagEmoji(item.iso || item.code)}</span>
                                    <span className="country-code-option-text">
                                        <span className="country-code-number">{item.code}</span>
                                        <span className="country-code-name">{item.country}</span>
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className="country-code-no-results">No countries found</li>
                        )}
                    </ul>
                </div>
            )}
            <select
                id={id}
                name="countryCode"
                value={value}
                onChange={onChange}
                required={required}
                className="country-code-select-hidden"
                aria-hidden="true"
                tabIndex="-1"
            >
                {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                        {item.code}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CountryCodeSelect;

import React, { ReactNode, useRef, useState } from 'react';
import { AutoComplete, Button, Input, InputRef, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.less';
import classnames from 'classnames';

interface LabeledValue {
  value: string;
  label: ReactNode;
}

interface AutoCompleteOptions {
  title: string;
  options: LabeledValue[];
}

export interface ISearchBarProps {
  /**
   * @description       large:50px ; middle:40px ; small:30px
   * @default           middle
   */
  size?: 'large' | 'small' | 'middle';
  /**
   * @description       点击搜索时回调
   */
  onSearch: (selectValue: string, inputValue: string) => void;
  /**
   * @description        选择框选择Option时回调
   */
  onSelectChange?: (selectValue: string) => void;
  /**
   * @description        搜索补全项时回调
   */
  onAutoCompleteInputChange?: (autoCompleteValue: string) => void;
  /**
   * @description        数据化配置选择框选项内容
   */
  selectOptions?: LabeledValue[];
  /**
   * @description        选择框默认值
   */
  defaultSelectValue?: string;
  /**
   * @description        数据化配置自动完成选项内容
   */
  autoCompleteOptions?: AutoCompleteOptions[];
}

const SearchBar: React.FC<ISearchBarProps> = ({
  size: customSize = 'middle',
  onSearch: customOnSearch,
  onSelectChange: customOnSelectChange,
  onAutoCompleteInputChange: customOnAutoCompleteInputChange,
  selectOptions,
  defaultSelectValue,
  autoCompleteOptions,
}) => {
  const sizeClassNameMap = { large: 'h-[50px]', small: 'h-[30px]', middle: 'h-[40px]' };
  const size = sizeClassNameMap[customSize];
  const inputRef = useRef<InputRef>(null);
  const [selectValue, setSelectValue] = useState('');

  const onSearch = () => {
    if (customOnSearch) {
      customOnSearch(selectValue, inputRef?.current?.input?.value!);
    }
  };

  const onSelectChange = (value: string) => {
    if (customOnSelectChange) {
      customOnSelectChange(value);
    }
    setSelectValue(value);
  };

  const onAutoCompleteInputChange = (value: string) => {
    if (customOnAutoCompleteInputChange) {
      customOnAutoCompleteInputChange(value);
    }
  };

  const renderAutoOptionTitle = (title: string) => <span>{title}</span>;

  const renderAutoOptionitem = (option: LabeledValue) => ({
    value: option.value,
    label: <span>{option.label}</span>,
  });

  const autoOption = () => {
    return autoCompleteOptions?.map((autoItem) => ({
      label: renderAutoOptionTitle(autoItem.title),
      options: autoItem.options.map((autoOption) => renderAutoOptionitem(autoOption)),
    }));
  };

  return (
    <div className={classnames(styles.search_bar, size)}>
      <Input.Group compact className="h-full">
        <Select
          className="w-3/12 h-full"
          defaultValue={defaultSelectValue}
          onChange={onSelectChange}
          popupClassName={styles.select_popover}
        >
          {selectOptions?.map((select) => (
            <Select.Option key={select.value} value={select.value}>
              {select.label}
            </Select.Option>
          ))}
        </Select>
        <AutoComplete
          className="h-full w-7/12"
          popupClassName={styles.auto_complete}
          options={autoOption()}
          onSearch={onAutoCompleteInputChange}
        >
          <Input type="text" className="h-full font-medium" placeholder="Search" ref={inputRef} />
        </AutoComplete>
        <Button
          className="w-2/12 bg-[#555759] text-white h-full"
          icon={<SearchOutlined style={{ fontSize: 25 }} />}
          onClick={onSearch}
        ></Button>
      </Input.Group>
    </div>
  );
};

export default SearchBar;

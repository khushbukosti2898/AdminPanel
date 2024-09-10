import { useEffect } from 'react';
import { CustomInput } from '../../core/CustomInput';
import { calculateItemTotal } from '../../../services/estimations';

export const SectionItems = ({ index, item, sectionIndex, setFieldValue }) => {
  useEffect(() => {
    const total = calculateItemTotal(item.quantity, item.price, item.margin);
    setFieldValue(`sections[${sectionIndex}].items[${index}].total`, total);
  }, [item, sectionIndex, index, setFieldValue]);

  return (
    <>
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].title`}
        placeholder="Title"
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].description`}
        placeholder="Description"
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].unit`}
        placeholder="Unit"
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].quantity`}
        type="number"
        placeholder="Quantity"
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].price`}
        type="number"
        placeholder="Price"
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].margin`}
        type="number"
        placeholder="Margin (%)"
        min={0}
        max={100}
      />
      <CustomInput
        showErrorMsg={false}
        size="small"
        fullWidth={false}
        name={`sections[${sectionIndex}].items[${index}].total`}
        type="number"
        value={item.total}
        disabled
      />
    </>
  );
};

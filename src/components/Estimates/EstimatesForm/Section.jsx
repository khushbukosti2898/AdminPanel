import { useEffect } from 'react';
import { SectionItems } from './SectionItems';
import { calculateSectionTotal } from '../../../services/estimations';
import { IconButton, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { FieldArray } from 'formik';
import { CustomInput } from '../../core/CustomInput';
import { initialItem } from '../../../const/estimate';

export const Section = ({ index, section, setFieldValue, pushSection }) => {
  useEffect(() => {
    const total = calculateSectionTotal(section.items);
    setFieldValue(`sections[${index}].total`, total);
  }, [section, index, setFieldValue]);

  return (
    <Stack gap={2}>
      <Stack direction="row" position="relative">
        <IconButton
          onClick={() =>
            pushSection({ name: '', total: 0, items: [initialItem] })
          }
        >
          <AddCircleIcon />
        </IconButton>
        <CustomInput
          showErrorMsg={false}
          fullWidth={false}
          name={`sections[${index}].name`}
          placeholder="Section"
          sx={{
            zIndex: 1,
            '& .MuiInputBase-root input': { backgroundColor: 'white' },
          }}
        />
        <CustomInput
          showErrorMsg={false}
          sx={{
            width: '200px',
            marginLeft: 'auto',
            zIndex: 1,
            '& .MuiInputBase-root input': { backgroundColor: 'white' },
          }}
          type="number"
          name={`sections[${index}].total`}
          value={section.total}
          disabled
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'calc(100% - 60px)',
            height: '1px',
            backgroundColor: 'black',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }}
        ></div>
      </Stack>

      <Stack gap={2}>
        <FieldArray name={`sections[${index}].items`}>
          {({ push, remove }) => (
            <Stack gap={2}>
              {section.items.map((item, itemIndex) => (
                <Stack
                  direction="row"
                  gap={2}
                  key={itemIndex}
                  sx={{ paddingLeft: '40px' }}
                >
                  <SectionItems
                    index={itemIndex}
                    item={item}
                    sectionIndex={index}
                    setFieldValue={setFieldValue}
                  />
                  <Stack width="100px" direction="row" gap={1}>
                    <IconButton onClick={() => push(initialItem)}>
                      <AddCircleIcon />
                    </IconButton>
                    {section.items.length > 1 && itemIndex > 0 && (
                      <IconButton onClick={() => remove(itemIndex)}>
                        <DoDisturbOnIcon />
                      </IconButton>
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          )}
        </FieldArray>
      </Stack>
    </Stack>
  );
};

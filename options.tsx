import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import { OptionCategoryType } from '@/utils/type';
import api from '../utils/api';
import OptionsCategory from './optionsCategory';

type OptionsProps = {
    handleLaunchComputation: () => void;
};

const Options = ({ handleLaunchComputation }: OptionsProps) => {
    const [options, setOptions] = useState<OptionCategoryType[]>([]);
    const [otherOptionsSelected, setOtherOptionsSelected] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const results = await api.getComputationOptionsData();
            setOptions(results['items']);
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log('🚀 ~ file: options.tsx:27 ~ Options ~ options, otherOptionsSelected:', options, otherOptionsSelected);
    }, [options, otherOptionsSelected]);

    const handleSelectOption = (id: string) => {
        setOtherOptionsSelected(otherOptionsSelected.includes(id) ? otherOptionsSelected.filter((item) => item !== id) : [id, ...otherOptionsSelected]);
    };

    return (
        <div>
            {options.map((option) => (
                <OptionsCategory category={option} handleSelectOption={handleSelectOption} otherOptionsSelected={otherOptionsSelected} />
            ))}
            <Divider variant="middle" />
            <div className="launch-button">
                <div onClick={handleLaunchComputation}>Launch computation</div>
            </div>
        </div>
    );
};

export default Options;

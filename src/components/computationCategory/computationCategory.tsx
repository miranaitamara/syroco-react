import { useState } from 'react';

import ComputationItem from '../computationItem/computationItem';

import { OptionType, CategoryType } from '@/utils/type';

const Category = ({ category }: { category: CategoryType }) => {
    const [selected, setSelected] = useState<string>();
    const selectItem = (e: any): void => {
        console.log('selcted', selected);
        setSelected(e.target.getAttribute('data-id'));
    };
    return (
        <>
            <h1 className="category--title">Category: {category.name}</h1>
            <section className="cards">
                {category.items.map((item: OptionType) => (
                    <ComputationItem key={item.id} item={item} selectItem={selectItem} selectedId={selected} />
                ))}
            </section>
        </>
    );
};

export default Category;

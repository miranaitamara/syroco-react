import { OptionType } from '@/utils/type';

const ComputationItem = ({ item, selectItem, selectedId }: { item: OptionType; selectItem: (e: any) => void; selectedId: string | undefined }) => {
    return (
        <>
            <div
                className={`card  
        ${selectedId === item.id && 'card--selected'}`}>
                <div className="card__content">
                    <p className="card__title text--medium">{item.name}</p>
                </div>
                <div className="card__image-container">
                    <img src={item.photoUrL} alt={item.name} />
                </div>
                <button className={`card__button  ${selectedId && 'card--selected'}`} data-id={item.id} onClick={selectItem}>
                    Select
                </button>
            </div>
        </>
    );
};

export default ComputationItem;

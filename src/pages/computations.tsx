import { useState, useEffect } from 'react';

import Category from '../components/computationCategory/computationCategory';
import Modal from '../components/modal/modal';

import { CategoryType } from '@/utils/type';

export interface ComputationType {
    items: CategoryType[];
}

function ComputationList() {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [toggleModal, setToogleModal] = useState<boolean>(false);

    useEffect(() => {
        const url = 'http://localhost:8080/api/computation-options';
        const fetchApi = async (): Promise<void> => {
            try {
                setLoading(true);
                const response: Response = await fetch(url);
                const data: ComputationType = await response.json();
                setCategories(data.items);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                throw error;
            }
        };
        fetchApi();
    }, []);

    const showModal = (): void => {
        setToogleModal(true);
    };

    const hideModal = (): void => {
        setToogleModal(false);
    };

    // const handleClick = () => setTitle(titleRef.current.value);
    return (
        <>
            <main>
                {categories.map((cat: CategoryType) => (
                    <Category key={cat.id} category={cat} />
                ))}
            </main>
            <Modal show={toggleModal} handleClose={hideModal}>
                <p className="modal-text">Computation completed!</p>
            </Modal>
            <button className="launch__button" onClick={showModal}>
                Launch computation
            </button>
        </>
    );
}

export default ComputationList;

    import React from 'react';
    import { useParams } from 'react-router-dom';
    import { getAllNotes ,getNote} from '../utils/local-data';
    import DetailPage from '../Pages/DetailPage';

    function DetailWrap() {
        const { id } = useParams();
        return <Detail id={Number(id)} />;
    }

    class Detail extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                note: getAllNotes(props.id)
                
            };
        }
        
        render() {
            if (this.state.note === null) {
                return <p>Catatan tidak ditemukan!</p>;
            }
    
            return (
                <section>
                    <DetailPage data={getNote(this.state.note)} />
                </section>
            );
        }
    }

    export default DetailWrap;

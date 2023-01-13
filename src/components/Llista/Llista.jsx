import { useFetchAPI } from "../../lib/hooks/useFetchAPI";
import { Contenidor } from "./LlistaStyled";
import LlistaItem from "../LlistaItem/LlistaItem";
import { useState } from "react";
import { ENDPOINTSAPI } from "../../lib/constants/endPointsAPI";
import Paginacio from "../Paginacio/PaginacioBotoMore";
import Missatge from '../common/Missatge';

const Llista = () => {
  const [pagina, setPagina] = useState(1);
  const url = ENDPOINTSAPI.starships;
  const { dades, loading, error } = useFetchAPI(url, pagina);

  return (
    <div>
      {loading && <Missatge text={"loading data..."} />}
      {error && <Missatge text={"Error loading data:"} error={error} />}
      <Contenidor>
        {dades && !loading && !error && (
          <>
            <ul>
              {dades.map((starship, index) => (
                <LlistaItem key={index} starship={starship} />
              ))}
            </ul>
            <Paginacio pagina={pagina} setPagina={setPagina} />
          </>
        )}
      </Contenidor>
    </div>
  );
};

export default Llista;

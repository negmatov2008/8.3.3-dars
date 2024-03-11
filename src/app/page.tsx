"use client";

import ErrorModal from "@/components/ErrorModal";
import Hero from "@/components/Hero";
import IPSearcher from "@/components/IPSearcher";
import Loader from "@/components/Loader";
import Map from "@/components/Map";
import Modal from "@/components/Modal";
import { useFormSubmit } from "@/utils/useFormSubmit";

export default function Home() {
  const {
    ip,
    geolocation,
    isLoading,
    isIPValidate,
    error,
    latitude,
    longitude,
    handleFormSubmit,
    handleInputChange,
  } = useFormSubmit();

  return (
    <main>
      <Hero>
        <IPSearcher
          ip={ip}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
        />
        {!isIPValidate && <ErrorModal text="IP no válida" />}
        {error && (
          <ErrorModal text="Error al obtener la información de geolocalización, intentelo más tarde" />
        )}
        {isLoading ? (
          <Loader />
        ) : (
          geolocation && !error && <Modal item={geolocation} />
        )}
      </Hero>
      <Map lat={latitude} lng={longitude} />
    </main>
  );
}

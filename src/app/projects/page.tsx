"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import { useEffect, useState } from "react";

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.github.com/users/CarlosDavid-AM/repos');
        const data = await res.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-xl lg:text-3xl mt-7 text-center lg:text-start">
        Estos son mis proyectos personales en los que he trabajado a lo largo de mi carrera como programador.
      </h2>
      <div className="container mx-auto p-4 mb-8">
        <div className="grid lg:grid-cols-2 gap-4 mt-12 mb-4">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            repos.map(({ id, name, html_url }: Repository) => (
              <a href={html_url} target="_blank" key={id}
                className="bg-gray-850 hover:bg-gray-900 p-4 rounded-md shadow flex justify-between items-center mx-14"
              >
                <h3>{name}</h3>
                <span>
                  <img src="/imagenes/svg/arrow-up-right.svg" alt="arrow-up-right" className="h-6" />
                </span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;

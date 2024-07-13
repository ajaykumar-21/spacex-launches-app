import React, { useState, useEffect } from "react";
import { fetchLaunches } from "../../services/spacexApi";
import LaunchItem from "../LaunchItem/LaunchItem";
import SearchBar from "../SearchBar/SearchBar";
import Filters from "../Filters/Filters";

const LaunchList = () => {
  const [launches, setLaunches] = useState([]);
  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const getLaunches = async () => {
      const data = await fetchLaunches(); // Calls the fetchLaunches function to retrieve data asynchronously and assigns the result to the variable 'data'.
      setLaunches(data);
      setFilteredLaunches(data);
    };
    getLaunches(); // Invokes the getLaunches function to initiate the fetching of launch data when this script runs.
  }, []);

  useEffect(() => {
    let filtered = launches;

    if (yearFilter) {
      filtered = filtered.filter((launch) => launch.launch_year === yearFilter);
    }

    if (statusFilter) {
      filtered = filtered.filter(
        (launch) => launch.launch_success === (statusFilter === "success")
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((launch) =>
        launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredLaunches(filtered);
  }, [searchTerm, yearFilter, statusFilter, launches]);

  return (
    <div>
      <h1>Spacex Laucher</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <Filters
        setYearFilter={setYearFilter}
        setStatusFilter={setStatusFilter}
      />
      <div className="launch-list">
        {filteredLaunches.map((launch) => (
          <LaunchItem key={launch.mission_name} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default LaunchList;

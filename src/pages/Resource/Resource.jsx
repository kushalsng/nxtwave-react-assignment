import React, { useEffect, useMemo, useState } from 'react'
import SearchBox from '../../components/SearchBox';
import ResourceCard from '../../components/ResourceCard';
import { toast } from 'react-toastify';
import axios from 'axios';
import Pagination from '../../components/Pagination';
import { PAGINATION_LIMIT } from '../../constants/pagination';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import NoData from '../../components/NoData';

const Resource = () => {
  const [skip, setSkip] = useState(0);
  const [resourceList, setResourceList] = useState([]);
  const [resourceFetchFailed, setResourceFetchFailed] = useState(false);
  const [resourceLoading, setResourceLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('1');

  const searchedResourceList = useMemo(() => {
    return resourceList.filter((resource) => !search.length || resource.title.toLowerCase().includes(search.toLowerCase()))
  }, [resourceList, search])

  const filteredResourceList = useMemo(() => {
    return searchedResourceList.filter((resource) => {
      if (activeTab === '2') {
        return resource.tag === 'request';
      } else if (activeTab === '3') {
        return resource.tag === 'user';
      }
      return true;
    })
  }, [searchedResourceList, activeTab])

  const slicedResourceList = useMemo(() => {
    return filteredResourceList.slice(skip, skip + PAGINATION_LIMIT);
  }, [filteredResourceList, skip])

  const fetchResources = async () => {
    try {
      setResourceLoading(true);
      setResourceFetchFailed(false);
      const responseData = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setResourceLoading(false);
      setResourceList(() => responseData.data);
    } catch (err) {
      console.error(err);
      setResourceLoading(false);
      setResourceFetchFailed(true);
      toast.error(err.response.message, {
        position: 'top-right'
      })
    }
  }
  useEffect(() => {
    fetchResources();
  }, [])

  useEffect(() => {
    setSearch('');
  }, [activeTab])
  return (
    <React.Fragment>
      <nav className="nav">
        <div
          className={`tab ${activeTab === '1' ? 'active' : ''}`}
          onClick={() => setActiveTab('1')}
        >
          Resources
        </div>
        <div
          className={`tab ${activeTab === '2' ? 'active' : ''}`}
          onClick={() => setActiveTab('2')}
        >
          Requests
        </div>
        <div
          className={`tab ${activeTab === '3' ? 'active' : ''}`}
          onClick={() => setActiveTab('3')}
        >
          Users
        </div>
      </nav>
      <SearchBox search={search} setSearch={setSearch} />
      <section className="section-container">
        <div className="item-container" style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          {resourceLoading ? (
            <Loader />
          ) : resourceFetchFailed ? (
            <Error />
          ) : (!resourceLoading && !resourceFetchFailed && !slicedResourceList.length) ? (
            <NoData />
          ) : (
            slicedResourceList.map((resource) => (
              <ResourceCard resource={resource} />
            ))
          )}
        </div>
      </section>
      <Pagination skip={skip} setSkip={setSkip} totalCount={filteredResourceList.length} />
    </React.Fragment>
  )
}

export default Resource;
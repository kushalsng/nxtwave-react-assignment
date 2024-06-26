import React, { useEffect, useMemo, useState } from 'react'
import SearchBox from '../../components/SearchBox';
import ResourceCard from '../../components/ResourceCard';
import { toast } from 'react-toastify';
import Pagination from '../../components/Pagination';
import { PAGINATION_LIMIT } from '../../constants/pagination';
import Error from '../../components/Loaders/Error';
import Loader from '../../components/Loaders/Loader';
import NoData from '../../components/Loaders/NoData';
import { getResources } from '../../helper/apiCalls';
import '../../styles/resources.css'
import { useDispatch, useSelector } from 'react-redux'
import { setResourceFetchFailed, setResourceList, setResourceLoading } from '../../redux/resource/actions';

const Resource = () => {
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('1');
  const dispatch = useDispatch();
  const { resourceList, resourceEmpty, resourceLoading, resourceFetchFailed } = useSelector((state) => state.resource);
  const searchedResourceList = useMemo(() => {
    if(resourceList && resourceList.length) {
      return resourceList.filter((resource) => !search.length || resource.title.toLowerCase().includes(search.trim().toLowerCase()))
    } else {
      return [];
    }
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
      dispatch(setResourceLoading());
      const responseData = await getResources();
      dispatch(setResourceList(responseData.data));
    } catch (err) {
      console.error(err);
      dispatch(setResourceFetchFailed());
      toast.error(err.response.message)
    }
  }
  useEffect(() => {
    fetchResources();
  }, [])

  useEffect(() => {
    setSearch('');
    setSkip(0);
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
        {resourceLoading ? (
          <Loader />
        ) : resourceFetchFailed ? (
          <Error />
        ) : (resourceEmpty) ? (
          <NoData />
        ) : (
          <>
            <SearchBox search={search} setSearch={setSearch} />
            <section className="section-container">
              <div className="item-container">
                  {slicedResourceList.map((resource) => (
                    <ResourceCard resource={resource} />
                  ))}
              </div>
            </section>
            <Pagination skip={skip} setSkip={setSkip} totalCount={filteredResourceList.length} />
          </>
        )}
    </React.Fragment>
  )
}

export default Resource;
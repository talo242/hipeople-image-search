import Image from '../Image/Image.interface';

interface SearchImageResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export default SearchImageResponse
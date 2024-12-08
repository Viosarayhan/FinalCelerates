import NavbarAdmin from "../Components/Elements/Navbar/NavbarAdmin";
import Footer from "../Components/Elements/Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

const DataArtikel = () => {
    const [articles, setArticles] = useState([]);
    const [categories] = useState([
        { id: 1, name: "Design" },
        { id: 2, name: "Data" },
        { id: 3, name: "Industrial" },
        { id: 4, name: "Engineer" },
    ]);

    const [newArticle, setNewArticle] = useState({
        id: "",
        count: 1,
        slug: "",
        judul: "",
        description: "",
        isi: "",
        category: "",
        img: "",
    });

    const [editingArticle, setEditingArticle] = useState(null);


    // Fetch articles from API
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    const addArticle = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/articles', newArticle);
          setArticles(prevArticles => [
            ...prevArticles,
            { ...newArticle, id: response.data.articleId }
          ]);
          setNewArticle({
            judul: "",
            description: "",
            isi: "",
            category: "",
            img: "",
            slug: "",
            count: 1,
          });
          alert('Article added successfully!');
        } catch (error) {
          console.error('Error adding article:', error);
        }
      };


    const updateArticle = async () => {
        try {
          await axios.put(`http://localhost:5000/api/articles/${editingArticle.id}`, editingArticle);
          setArticles(
            articles.map((article) =>
              article.id === editingArticle.id ? editingArticle : article
            )
          );
          setEditingArticle(null);
          alert('Article updated successfully!');
        } catch (error) {
          console.error('Error updating article:', error);
        }
      };



    return (
        <div className="flex flex-col min-h-screen">
            <NavbarAdmin />
            <div className="flex-grow">
                <div className="flex flex-col mx-[150px] mt-[104px] mb-[40px]">
                    <h1 className="text-2xl font-bold mb-4">Manage Articles</h1>

                    {/* Articles Table */}
                    <table className="table-auto w-full border-collapse border border-black">
                        <thead>
                            <tr className="h-[60px] bg-gray-100">
                                <th className="px-4 py-2 text-black text-lg font-semibold">ID</th>
                                <th className="px-4 py-2 text-black text-lg font-semibold">Title</th>
                                <th className="px-4 py-2 text-black text-lg font-semibold">Image</th>
                                <th className="px-4 py-2 text-black text-lg font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id} className="h-[60px] border-t border-b border-black">
                                    <td className="px-4 py-2 text-center">{article.id}</td>
                                    <td className="px-4 py-2 text-center">{article.judul}</td>
                                    <td className="px-4 py-2 text-center">
                                        <img src={article.img} alt={article.judul} className="w-[50px]" />
                                    </td>
                                    <td className="px-4 py-2 text-center">
                                        <button
                                            onClick={() => setEditingArticle(article)}
                                            className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteArticle(article.id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-6">
    <h2 className="text-lg font-bold">{editingArticle ? "Edit Article" : "Add Article"}</h2>
    <form
        onSubmit={(e) => {
            e.preventDefault();
            editingArticle ? updateArticle() : addArticle();
        }}
        className="flex flex-col gap-4"
    >
        {/* ID (hidden for editing) */}
        {editingArticle && (
            <input
                type="text"
                placeholder="ID"
                value={editingArticle.id}
                readOnly
                className="border p-2"
            />
        )}

        {/* Count */}
        <input
            type="number"
            placeholder="Count"
            value={editingArticle ? editingArticle.count : newArticle.count}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, count: e.target.value })
                    : setNewArticle({ ...newArticle, count: e.target.value })
            }
            className="border p-2"
        />

        {/* Slug */}
        <input
            type="text"
            placeholder="Slug"
            value={editingArticle ? editingArticle.slug : newArticle.slug}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, slug: e.target.value })
                    : setNewArticle({ ...newArticle, slug: e.target.value })
            }
            className="border p-2"
        />

        {/* Judul */}
        <input
            type="text"
            placeholder="Judul"
            value={editingArticle ? editingArticle.judul : newArticle.judul}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, judul: e.target.value })
                    : setNewArticle({ ...newArticle, judul: e.target.value })
            }
            className="border p-2"
        />

        {/* Description */}
        <textarea
            placeholder="Description"
            value={editingArticle ? editingArticle.description : newArticle.description}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, description: e.target.value })
                    : setNewArticle({ ...newArticle, description: e.target.value })
            }
            className="border p-2"
        ></textarea>

        {/* Isi */}
        <textarea
            placeholder="Isi"
            value={editingArticle ? editingArticle.isi : newArticle.isi}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, isi: e.target.value })
                    : setNewArticle({ ...newArticle, isi: e.target.value })
            }
            className="border p-2"
        ></textarea>

        {/* Category */}
        <select
            value={editingArticle ? editingArticle.category : newArticle.category}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, category: e.target.value })
                    : setNewArticle({ ...newArticle, category: e.target.value })
            }
            className="border p-2"
        >
            <option value="">Select Category</option>
            {categories.map((category) => (
                <option key={category.id} value={category.name}>
                    {category.name}
                </option>
            ))}
        </select>

        {/* Image URL */}
        <input
            type="text"
            placeholder="Image URL"
            value={editingArticle ? editingArticle.img : newArticle.img}
            onChange={(e) =>
                editingArticle
                    ? setEditingArticle({ ...editingArticle, img: e.target.value })
                    : setNewArticle({ ...newArticle, img: e.target.value })
            }
            className="border p-2"
        />

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {editingArticle ? "Update Article" : "Add Article"}
        </button>
    </form>
</div>


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DataArtikel;

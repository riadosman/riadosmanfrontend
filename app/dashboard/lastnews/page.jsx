"use client";
import React, { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Save, X, Globe } from "lucide-react";
import isAuth from "../../components/isAuth";
import { useRouter } from "next/navigation";

function LanguageDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLanguage, setEditingLanguage] = useState(null);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    proficiency: "Beginner",
    flag: "🌐",
  });
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inlineEditId, setInlineEditId] = useState(null);
  const [inlineFormData, setInlineFormData] = useState({
    name: "",
    proficiency: "",
  });
  const router = useRouter();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("token");
    if (!tokenLocal) {
      router.push("/");
    } else {
      setToken(tokenLocal);
      fetchLanguages();
    }
  }, []);

  const fetchLanguages = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/languages`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) throw new Error("Failed to fetch languages");
      const data = await response.json();
      setLanguages(data);
    } catch (error) {
      console.error("Error fetching languages:", error);
      setLanguages([]);
    } finally {
      setLoading(false);
    }
  };

  const proficiencyLevels = ["Beginner", "Intermediate", "Advanced"];

  const commonFlags = {
    English: "🇺🇸",
    Spanish: "🇪🇸",
    French: "🇫🇷",
    German: "🇩🇪",
    Italian: "🇮🇹",
    Portuguese: "🇵🇹",
    Chinese: "🇨🇳",
    Japanese: "🇯🇵",
    Korean: "🇰🇷",
    Arabic: "🇸🇦",
    Russian: "🇷🇺",
    Dutch: "🇳🇱",
  };

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Beginner":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Advanced":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  const getProficiencyWidth = (proficiency) => {
    switch (proficiency) {
      case "Beginner":
        return "w-1/5";
      case "Intermediate":
        return "w-2/5";
      case "Advanced":
        return "w-3/5";
      default:
        return "w-1/5";
    }
  };

  const openModal = (language = null) => {
    if (language) {
      setEditingLanguage(language);
      setFormData({
        name: language.name,
        proficiency: language.proficiency,
        flag: language.flag,
      });
    } else {
      setEditingLanguage(null);
      setFormData({
        name: "",
        proficiency: "Beginner",
        flag: "🌐",
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingLanguage(null);
    setFormData({ name: "", proficiency: "Beginner", flag: "🌐" });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) return;

    try {
      if (editingLanguage) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/languages`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              proficiency: formData.proficiency,
            }),
          }
        );
        if (!response.ok) throw new Error("Failed to update");
        const updatedLanguage = await response.json();
        setLanguages(
          languages.map((lang) =>
            lang.id === editingLanguage.id ? updatedLanguage : lang
          )
        );
      } else {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/languages`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              proficiency: formData.proficiency.toLowerCase(),
            }),
          }
        );
        console.log(response);

        if (!response.ok) throw new Error("Failed to create");
        const newLanguage = await response.json();
        setLanguages([...languages, newLanguage]);
      }
      closeModal();
    } catch (error) {
      console.error("Error saving language:", error);
      alert("Failed to save language. Please try again.");
    }
  };

  const deleteLanguage = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/languages/${id}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Failed to delete");
      setLanguages(languages.filter((lang) => lang.id !== id));
    } catch (error) {
      console.error("Error deleting language:", error);
      alert("Failed to delete language. Please try again.");
    }
  };

  const startInlineEdit = (language) => {
    setInlineEditId(language.id);
    setInlineFormData({
      name: language.name,
      proficiency: language.proficiency,
    });
  };

  const saveInlineEdit = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/languages`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: inlineFormData.name,
            proficiency: inlineFormData.proficiency,
          }),
        }
      );
      if (!response.ok) throw new Error("Failed to update");

      const updatedLanguage = await response.json();
      setLanguages(
        languages.map((lang) => (lang.id === id ? updatedLanguage : lang))
      );
    } catch (error) {
      console.error("Error saving inline edit:", error);
      alert("Failed to save changes");
    } finally {
      setInlineEditId(null);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 flex items-center justify-center gap-4">
            <Globe className="w-16 h-16" />
            Language Skills
          </h1>
          <p className="text-xl text-gray-300">
            Manage your language proficiency levels
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Your Languages</h2>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 cursor-pointer border-2 border-main-color duration-200 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105"
          >
            <Plus className="w-5 h-5" />
            Add Language
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((language) => (
            <div
              key={language.name}
              className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{language.flag}</span>
                  {inlineEditId === language._id ? (
                    <input
                      type="text"
                      value={inlineFormData.name}
                      onChange={(e) =>
                        setInlineFormData({
                          ...inlineFormData,
                          name: e.target.value,
                        })
                      }
                      onBlur={() => saveInlineEdit(language.id)}
                      className="px-2 py-1 rounded bg-white/10 text-white w-32"
                    />
                  ) : (
                    <h3
                      className="text-xl font-bold text-white cursor-pointer"
                      onClick={() => startInlineEdit(language)}
                    >
                      {language.name}
                    </h3>
                  )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openModal(language)}
                    className="p-2 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 rounded-lg transition-colors duration-200"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteLanguage(language._id)}
                    className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Proficiency</span>
                  <span
                    onClick={() => startInlineEdit(language)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border cursor-pointer ${getProficiencyColor(
                      language.proficiency
                    )}`}
                  >
                    {inlineEditId === language.id ? (
                      <select
                        value={inlineFormData.proficiency}
                        onChange={(e) =>
                          setInlineFormData({
                            ...inlineFormData,
                            proficiency: e.target.value,
                          })
                        }
                        onBlur={() => saveInlineEdit(language.id)}
                        className="bg-gray-800 text-white rounded px-2 py-1"
                      >
                        {proficiencyLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    ) : (
                      language.proficiency
                    )}
                  </span>
                </div>

                <div className="w-full bg-gray-700/50 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-500 ${getProficiencyWidth(
                      language.proficiency
                    )}`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900/95 backdrop-blur-md rounded-2xl p-8 border border-white/20 w-full max-w-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {editingLanguage ? "Edit Language" : "Add New Language"}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Language Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="e.g., Spanish, French, German"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Proficiency Level
                  </label>
                  <select
                    value={formData.proficiency}
                    onChange={(e) =>
                      setFormData({ ...formData, proficiency: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                  >
                    {proficiencyLevels.map((level) => (
                      <option key={level} value={level} className="bg-gray-800">
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Flag/Emoji
                  </label>
                  <input
                    type="text"
                    value={formData.flag}
                    onChange={(e) =>
                      setFormData({ ...formData, flag: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                    placeholder="🌐"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Save className="w-4 h-4" />
                    {editingLanguage ? "Update" : "Add"} Language
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-6 py-3 bg-gray-600/50 hover:bg-gray-600/70 text-gray-300 rounded-xl font-semibold transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default LanguageDashboard;
